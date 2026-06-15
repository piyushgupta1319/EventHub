"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { generateOTP } from "@/lib/otp";
import { sendOTPEmail } from "@/lib/mail";

export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: string = 'STUDENT'
) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isVerified: false,
        role: role === 'ADMIN' ? 'ADMIN' : 'STUDENT',
      },
    });

    // Generate OTP
    const otp = generateOTP();

    // Save OTP in database
    await prisma.oTPVerification.create({
      data: {
        email,
        otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Send email
    await sendOTPEmail(email, otp);

    return {
      success: true,
      message: "OTP sent successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function verifyOTP(email: string, otp: string) {
  try {
    const otpRecord = await prisma.oTPVerification.findFirst({
      where: {
        email,
        otp,
        isUsed: false,
      },
    });

    if (!otpRecord) {
      return {
        success: false,
        message: "Invalid OTP",
      };
    }

    // Check expiry
    if (otpRecord.expiresAt < new Date()) {
      return {
        success: false,
        message: "OTP has expired",
      };
    }

    // Verify user
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        isVerified: true,
      },
    });

    // Mark OTP as used
    await prisma.oTPVerification.update({
      where: {
        id: otpRecord.id,
      },
      data: {
        isUsed: true,
      },
    });

    return {
      success: true,
      message: "Email verified successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function loginUser(
  email: string,
  password: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return {
  success: false,
  message: "User not found",
  user: null,
};
    }

    if (!user.isVerified) {
      return {
        success: false,
        message: "Please verify your email first",
        user: null,
      };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid password",
        user: null,
      };
    }

    return {
      success: true,
      message: "Login successful",
      user,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
      user: null,
    };
  }
}

export async function sendForgotPasswordOTP(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    const otp = generateOTP();

    await prisma.oTPVerification.create({
      data: {
        email,
        otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    await sendOTPEmail(email, otp);

    return {
      success: true,
      message: "OTP sent successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function resetPassword(
  email: string,
  otp: string,
  newPassword: string
) {
  try {
    const otpRecord = await prisma.oTPVerification.findFirst({
      where: {
        email,
        otp,
        isUsed: false,
      },
    });

    if (!otpRecord) {
      return {
        success: false,
        message: "Invalid OTP",
      };
    }

    if (otpRecord.expiresAt < new Date()) {
      return {
        success: false,
        message: "OTP expired",
      };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.oTPVerification.update({
      where: {
        id: otpRecord.id,
      },
      data: {
        isUsed: true,
      },
    });

    return {
      success: true,
      message: "Password updated successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}