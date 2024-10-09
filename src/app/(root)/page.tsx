'use client'

import Footer from "@/components/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import messages from "@/data/messages.json"
import Autoplay from "embla-carousel-autoplay"
import { Mail } from "lucide-react"


const Home = () => {
  return (
    <>
      <div className='flex flex-grow flex-col items-center sm:justify-center px-4 md:px-12 py-20 sm:py-12'>
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            Experience the freedom of anonymous messaging and say what&apos;s on your mind
          </h1>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
            Where your identity remains secret... 😜
          </p>
        </section>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-md mx-auto">
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className=" flex justify-center">
                <div className="max-w-sm w-full border bg-card rounded-md shadow-sm p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold">{message.title}</h3>
                  <div className="flex items-st mt-2 space-x-2">
                    <Mail className="flex-shrink-0 h-5 w-5 mt-0.5" />
                    <div className="flex flex-col items-start">
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.received}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div >
      <Footer />
    </>
  )
}

export default Home