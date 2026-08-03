import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6E8B3D] text-xl font-bold text-white">
          F
        </div>

        <span className="text-3xl font-bold text-[#111827]">
          FlexStore
        </span>
      </div>

      <p className="mt-6 max-w-sm leading-8 text-gray-600">
        Build, manage and scale your online business with one modern
        platform designed for ambitious teams.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#"
          className="rounded-full border border-gray-200 p-3 transition hover:border-[#6E8B3D] hover:text-[#6E8B3D]"
        >
          <FaFacebookF className="h-5 w-5" />
        </a>

        <a
          href="#"
          className="rounded-full border border-gray-200 p-3 transition hover:border-[#6E8B3D] hover:text-[#6E8B3D]"
        >
          <FaXTwitter className="h-5 w-5" />
        </a>

        <a
          href="#"
          className="rounded-full border border-gray-200 p-3 transition hover:border-[#6E8B3D] hover:text-[#6E8B3D]"
        >
          <FaLinkedinIn className="h-5 w-5" />
        </a>

        <a
          href="#"
          className="rounded-full border border-gray-200 p-3 transition hover:border-[#6E8B3D] hover:text-[#6E8B3D]"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}