import React, { useState } from "react";
import {
  ArrowLeft,
  X,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { login as loginService } from "../../services/auth.service";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Isi semua kolom!");
      return;
    }

    try {
      const response = await loginService({
        email,
        password,
      });

      login(
        response.data.token,
        response.data.user
      );

      toast.success(
        `Selamat datang, ${response.data.user.name}!`
      );

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Email atau password salah."
      );
    }
  };

  const handleForgotPassword = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error("Harap masukkan email.");
      return;
    }

    toast("Fitur reset password belum tersedia.", {
      icon: "ℹ️",
    });

    setForgotEmail("");
    setIsForgotOpen(false);
  };

  return (
    <div className="fixed inset-0 overflow-auto bg-[#0b0b0a] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="fixed inset-0 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-[#0b0b0a]" />

        {/* Top right warm light */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#b89452]/[0.08]
            blur-[120px]
          "
        />

        {/* Bottom left warm light */}
        <div
          className="
            absolute
            -bottom-48
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#b89452]/[0.05]
            blur-[120px]
          "
        />

        {/* Large architectural circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#b89452]/[0.06]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#b89452]/[0.04]
          "
        />

      </div>


      {/* =====================================================
          MAIN
      ===================================================== */}
      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-10
        "
      >

        <div className="w-full max-w-[460px]">

          {/* =================================================
              BACK TO WEBSITE
          ================================================= */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              mx-auto
              mb-7
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-white/40
              transition
              hover:text-[#c9a45c]
            "
          >
            <ArrowLeft size={15} />

            Back to website
          </button>


          {/* =================================================
              LOGIN CARD
          ================================================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-[#151513]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.55)]
            "
          >

            {/* Top decorative accent */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[2px]
                w-24
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#c9a45c]
                to-transparent
              "
            />

            {/* Card content */}
            <div className="px-7 py-9 sm:px-10 sm:py-11">

              {/* =================================================
                  LOGO
              ================================================= */}
              <div className="mb-9 text-center">

                <div
                  className="
                    relative
                    mx-auto
                    mb-6
                    flex
                    h-[74px]
                    w-[74px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c9a45c]/40
                    bg-[#c9a45c]/[0.04]
                  "
                >

                  {/* Inner ring */}
                  <div
                    className="
                      absolute
                      inset-[7px]
                      rounded-full
                      border
                      border-[#c9a45c]/15
                    "
                  />

                  <span
                    className="
                      relative
                      font-serif
                      text-[25px]
                      font-medium
                      tracking-[0.12em]
                      text-[#c9a45c]
                    "
                  >
                    CH
                  </span>

                </div>


                <h1
                  className="
                    font-serif
                    text-[28px]
                    font-medium
                    tracking-[0.16em]
                    text-white
                  "
                >
                  CENTA HOTEL
                </h1>


                <div
                  className="
                    mx-auto
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >

                  <span className="h-px w-8 bg-[#c9a45c]/30" />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-[#c9a45c]
                    "
                  >
                    Hospitality
                  </span>

                  <span className="h-px w-8 bg-[#c9a45c]/30" />

                </div>

              </div>


              {/* =================================================
                  WELCOME
              ================================================= */}
              <div className="mb-8">

                <h2
                  className="
                    text-center
                    text-xl
                    font-medium
                    text-white
                  "
                >
                  Welcome back
                </h2>

                <p
                  className="
                    mt-2
                    text-center
                    text-sm
                    text-white/35
                  "
                >
                  Sign in to access your hotel dashboard
                </p>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}
              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >

                {/* EMAIL */}
                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-white/55
                    "
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <Mail
                      size={17}
                      strokeWidth={1.7}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                      "
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="admin@centahotel.com"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-[#0e0e0d]
                        pl-11
                        pr-4
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-white/20
                        focus:border-[#c9a45c]/60
                        focus:bg-[#11110f]
                      "
                      required
                    />

                  </div>

                </div>


                {/* PASSWORD */}
                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-white/55
                    "
                  >
                    Password
                  </label>

                  <div className="relative">

                    <LockKeyhole
                      size={17}
                      strokeWidth={1.7}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                      "
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Enter your password"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-[#0e0e0d]
                        pl-11
                        pr-12
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-white/20
                        focus:border-[#c9a45c]/60
                        focus:bg-[#11110f]
                      "
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                        transition
                        hover:text-[#c9a45c]
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>

                </div>


                {/* OPTIONS */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pt-1
                  "
                >

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2.5
                      text-xs
                      text-white/40
                    "
                  >

                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) =>
                        setRemember(
                          e.target.checked
                        )
                      }
                      className="
                        h-3.5
                        w-3.5
                        cursor-pointer
                        accent-[#c9a45c]
                      "
                    />

                    Remember me

                  </label>


                  <button
                    type="button"
                    onClick={() =>
                      setIsForgotOpen(true)
                    }
                    className="
                      text-xs
                      font-medium
                      text-[#c9a45c]
                      transition
                      hover:text-[#e0c47e]
                    "
                  >
                    Forgot password?
                  </button>

                </div>


                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="
                    mt-2
                    h-[52px]
                    w-full
                    rounded-xl
                    bg-[#c9a45c]
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#15130e]
                    shadow-lg
                    shadow-[#c9a45c]/10
                    transition
                    duration-300
                    hover:bg-[#d7b96f]
                    hover:shadow-[#c9a45c]/20
                    active:scale-[0.99]
                  "
                >
                  Sign In
                </button>

              </form>


              {/* =================================================
                  FOOTER
              ================================================= */}
              <div className="mt-9">

                <div
                  className="
                    mb-5
                    h-px
                    bg-white/[0.06]
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[10px]
                      text-white/20
                    "
                  >
                    Secure administration
                  </span>

                  <span
                    className="
                      text-[10px]
                      text-white/20
                    "
                  >
                    © {new Date().getFullYear()}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* Bottom branding */}
          <p
            className="
              mt-6
              text-center
              text-[10px]
              tracking-[0.18em]
              text-white/15
            "
          >
            CENTA HOTEL · PREMIUM HOSPITALITY
          </p>

        </div>

      </main>


      {/* =====================================================
          FORGOT PASSWORD MODAL
      ===================================================== */}
      {isForgotOpen && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/75
            px-5
            backdrop-blur-md
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[430px]
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.08]
              bg-[#151513]
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            "
          >

            {/* Gold top */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[2px]
                w-20
                -translate-x-1/2
                bg-[#c9a45c]
              "
            />


            <div className="p-7 sm:p-9">

              {/* Close */}
              <button
                type="button"
                onClick={() =>
                  setIsForgotOpen(false)
                }
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.04]
                  text-white/30
                  transition
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <X size={16} />
              </button>


              {/* Icon */}
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c9a45c]/25
                  bg-[#c9a45c]/[0.05]
                "
              >
                <Mail
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#c9a45c]"
                />
              </div>


              <p
                className="
                  mb-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#c9a45c]
                "
              >
                Account recovery
              </p>


              <h2
                className="
                  font-serif
                  text-3xl
                  font-medium
                  text-white
                "
              >
                Reset password
              </h2>


              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/35
                "
              >
                Enter your registered email address
                to continue with account recovery.
              </p>


              <form
                onSubmit={handleForgotPassword}
                className="mt-7 space-y-5"
              >

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-white/50
                    "
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) =>
                      setForgotEmail(
                        e.target.value
                      )
                    }
                    placeholder="admin@centahotel.com"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-[#0e0e0d]
                      px-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/20
                      focus:border-[#c9a45c]/60
                    "
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    bg-[#c9a45c]
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#15130e]
                    transition
                    hover:bg-[#d7b96f]
                  "
                >
                  Send Reset Link
                </button>

              </form>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};
