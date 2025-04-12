'use client'

import Image from "next/image"
import Link from "next/link"
import { fontSans } from "./fonts"
import { Mail, ChevronLeft, ChevronRight, Linkedin, Instagram, Menu } from "lucide-react"
import ContactForm from "./components/contact-form"
import AIChatBot from "./components/AIChatBot"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import NetworkAnimation from "@/app/components/NetworkAnimation"
import { motion, AnimatePresence } from "framer-motion"
import TestimonialCard from "./components/testimonial-card"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    position: "Lead designer",
    image: "/testimonials/avatar1.jpg",
    quote:
      "Their blockchain expertise is next-level. They designed our dApp with such clarity that even our non-technical users found it intuitive. A perfect blend of design, functionality, and Web3 knowledge.",
  },
  {
    id: 2,
    name: "Jeetesh",
    position: "Project Head - JetSettrs",
    image: "/testimonials/avatar2.jpg",
    quote:
      "Working with the team was seamless. From user flow to final deployment, they nailed the UI/UX and delivered a stunning mobile and web app for JetSettrs. These guys get startup speed and design thinking — a rare combo.",
  },
  {
    id: 3,
    name: "Hannah Schmitt",
    position: "Lead designer",
    image: "/testimonials/avatar3.jpg",
    quote:
      "We were stuck between Web2 and Web3 — until we found them. Their hybrid knowledge helped us design and deploy a blockchain-based credentialing system in record time.",
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "CTO - BlockFin",
    image: "/testimonials/avatar4.jpg",
    quote:
      "The team's ability to translate complex blockchain concepts into intuitive interfaces is unmatched. Our DeFi platform saw a 40% increase in user engagement after their redesign.",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    position: "Founder - MetaVerse Studios",
    image: "/testimonials/avatar5.jpg",
    quote:
      "From concept to execution, they delivered our NFT marketplace with precision and creativity. Their deep understanding of both design principles and blockchain technology made all the difference.",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Welcome to Agency2</h1>
        <p className="mt-4">Your application is running successfully!</p>
          </div>
      </main>
  );
}
