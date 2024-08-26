"use client";
import { content } from "@/utils/content";

const { users } = content;


export default function User({ onHandleClick }) {
  return (
    <button
      onClick={onHandleClick}
      style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png')` }}
      className="w-[40px] h-[40px] bg-slate-600 rounded-full relative border-[2px] border-slate-400 bg-center bg-cover"
    ></button>
  );
}
