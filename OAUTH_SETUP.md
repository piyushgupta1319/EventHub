# Google & Facebook OAuth Setup Guide

This guide will help you set up Google and Facebook OAuth authentication for your EventHub application.

## Prerequisites

- Google Cloud Console access
- Facebook Developers account
- Your application is deployed or running on a domain

## Google OAuth Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown and select "NEW PROJECT"
3. Enter a project name (e.g., "EventHub")
4. Click "CREATE"

### Step 2: Enable OAuth 2.0 Consent Screen

1. In the left sidebar, go to **APIs & Services** > **OAuth consent screen**
2. Select **External** for User Type (unless you're an organization)
3. Click **CREATE**
4. Fill in the following:
   - **App name**: EventHub
   - **User support email**: your-email@example.com
   - **Developer contact info**: your-email@example.com
5. Click **SAVE AND CONTINUE**
6. Skip the scopes page and click **SAVE AND CONTINUE** again
7. Add test users (your email) if needed
8. Click **SAVE AND CONTINUE**

### Step 3: Create OAuth 2.0 Credentials

1. In the left sidebar, go to **APIs & Services** > **Credentials**
2. Click **CREATE CREDENTIALS** > **OAuth client ID**
3. Select **Web application** as the Application type
4. Under **Authorized redirect URIs**, add:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google` (for production)
5. Click **CREATE**
6. Copy the **Client ID** and **Client Secret** from the modal

### Step 4: Update Environment Variables

In your `.env` file, add:

```
AUTH_GOOGLE_ID=your_client_id_here
AUTH_GOOGLE_SECRET=your_client_secret_here
```

---

## Facebook OAuth Setup

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** > **Create App**
3. Choose **Consumer** as the app type
4. Fill in the following:
   - **App name**: EventHub
   - **App contact email**: your-email@example.com
   - **App purpose**: Select your category
5. Click **Create App**
6. Enter the security check if prompted

### Step 2: Add Facebook Login Product

1. In the app dashboard, click **+ Add Product**
2. Find **Facebook Login** and click **Set Up**
3. Choose **Web** as your platform
4. Skip the quick start guide

### Step 3: Configure Facebook Login Settings

1. Go to **Facebook Login** > **Settings** in the left sidebar
2. Under **Valid OAuth Redirect URIs**, add:
   - `http://localhost:3000/api/auth/callback/facebook`
   - `https://yourdomain.com/api/auth/callback/facebook` (for production)
3. Click **Save Changes**

### Step 4: Get App Credentials

1. Go to **Settings** > **Basic**
2. Copy the **App ID** and **App Secret**

### Step 5: Update Environment Variables

In your `.env` file, add:

```
AUTH_FACEBOOK_ID=your_app_id_here
AUTH_FACEBOOK_SECRET=your_app_secret_here
```

---

## Running the Application Locally

After setting up the OAuth credentials:

1. Update your `.env` file with the credentials from both Google and Facebook
2. Make sure `AUTH_URL` is set to `http://localhost:3000` for local development
3. Run the database migration:
   ```bash
   npx prisma migrate deploy
   ```
4. Start your development server:
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:3000/auth/login` to test the OAuth buttons

## Deploying to Production

When deploying to production:

1. Update `AUTH_URL` in your `.env` to your production domain:
   ```
   AUTH_URL=https://yourdomain.com
   ```
2. Add the production callback URLs in both Google Cloud Console and Facebook Developers:
   - Google: `https://yourdomain.com/api/auth/callback/google`
   - Facebook: `https://yourdomain.com/api/auth/callback/facebook`
3. Update the `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_FACEBOOK_ID`, and `AUTH_FACEBOOK_SECRET` in your production environment variables

## Troubleshooting

### "Invalid redirect_uri" Error

- Check that the redirect URI in your OAuth provider settings exactly matches the one in your code
- Make sure `AUTH_URL` is correctly set
- Try adding both `http://` and `https://` versions if you're not sure

### Users can't sign up with OAuth

- Ensure the database migration has been run: `npx prisma migrate deploy`
- Check that the environment variables are correctly set
- Clear your browser cookies and try again

### Email not being fetched

- Some OAuth providers might not return email by default
- You may need to request additional scopes in the provider configuration
- Use the email from the account profile if available

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/)
