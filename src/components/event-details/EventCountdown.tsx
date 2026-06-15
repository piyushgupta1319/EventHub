'use client';

import { useEffect, useState } from "react";

interface Props {
  eventDate: Date;
}

export default function EventCountdown({
  eventDate,
}: Props) {

  const calculateTimeLeft = () => {

    const difference =
      +new Date(eventDate) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {

      timeLeft = {

        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / 1000 / 60) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),

      };

    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div
      className="
      rounded-[32px]
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      p-10
      text-white
      shadow-xl
      "
    >

      <h2 className="text-3xl font-bold mb-10">

        Event Starts In

      </h2>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white/10 rounded-3xl p-6 text-center">

          <h1 className="text-5xl font-bold">
            {timeLeft.days}
          </h1>

          <p className="mt-3 text-slate-200">
            Days
          </p>

        </div>

        <div className="bg-white/10 rounded-3xl p-6 text-center">

          <h1 className="text-5xl font-bold">
            {timeLeft.hours}
          </h1>

          <p className="mt-3 text-slate-200">
            Hours
          </p>

        </div>

        <div className="bg-white/10 rounded-3xl p-6 text-center">

          <h1 className="text-5xl font-bold">
            {timeLeft.minutes}
          </h1>

          <p className="mt-3 text-slate-200">
            Minutes
          </p>

        </div>

        <div className="bg-white/10 rounded-3xl p-6 text-center">

          <h1 className="text-5xl font-bold">
            {timeLeft.seconds}
          </h1>

          <p className="mt-3 text-slate-200">
            Seconds
          </p>

        </div>

      </div>

    </div>

  );

}