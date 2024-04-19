"use client";
import {
  ArrowLeft,
  ArrowUp,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  Plus,
  TrashSimple,
} from "@phosphor-icons/react";

export function LinkedinIcon({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <LinkedinLogo size={size || 23} weight="bold" color={color || "white"} />
  );
}

export function GitHubIcon({ size, color }: { size?: number; color?: string }) {
  return (
    <GithubLogo size={size || 23} weight="bold" color={color || "white"} />
  );
}

export function InstagramIcon({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <InstagramLogo size={size || 23} weight="bold" color={color || "white"} />
  );
}

export function ListIcon({ size, color }: { size?: number; color?: string }) {
  return <List size={size || 23} weight="bold" color={color || "white"} />;
}

export function PlusIcon({ size, color }: { size?: number; color?: string }) {
  return <Plus size={size || 23} weight="bold" color={color || "white"} />;
}

export function TrashIcon({ size, color }: { size?: number; color?: string }) {
  return <TrashSimple size={size || 23} weight="bold" color={color || "white"} />;
}

export function ArrowLeftIcon({ size, color }: { size?: number; color?: string }) {
  return <ArrowLeft size={size || 23} weight="bold" color={color || "white"} />;
}

export function ArrowUpIcon({ size, color }: { size?: number; color?: string }) {
  return <ArrowUp size={size || 23} weight="bold" color={color || "white"} />;
}
