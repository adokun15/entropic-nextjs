"use client";
import { color, motion, stagger } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8,
      },
    },
  };

  const appearMotion = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
    },
  };
  const MotionLink = motion.create(Link);
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-[6vh] block space-y-3 overflow-hidden"
    >
      <motion.h1 variants={appearMotion} className="text-[6em]">
        JobHub : Empower your Career - StreamLine Your Hiring
      </motion.h1>
      <motion.p variants={appearMotion} className="text-xl text-center">
        Unlock Your Potentials with Just one Click
      </motion.p>

      <MotionLink
        variants={appearMotion}
        whileHover={{
          scale: 1.05,
          transition: {
            ease: "easeIn",
            duration: 0.2,
          },
        }}
        className={`${buttonVariants({
          variant: "default",
          size: "lg",
        })} block mx-[46vw]`}
        href="/login"
      >
        Sign Up
      </MotionLink>
    </motion.main>
  );
}
