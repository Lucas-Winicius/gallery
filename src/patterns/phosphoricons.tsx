"use client";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
} from "@phosphor-icons/react";

export function LinkedinIcon({ size, color }: { size?: number, color?: string }) {
  return <LinkedinLogo size={size || 23} weight="bold" color={color || "white"} />;
}

export function GitHubIcon({ size, color }: { size?: number, color?: string }) {
  return <GithubLogo size={size || 23} weight="bold" color={color || "white"} />;
}

export function InstagramIcon({ size, color }: { size?: number, color?: string }) {
  return <InstagramLogo size={size || 23} weight="bold" color={color || "white"} />;
}

export function ListIcon({ size, color }: { size?: number, color?: string }) {
  return <List size={size || 23} weight="bold" color={color || "white"} />;
}
