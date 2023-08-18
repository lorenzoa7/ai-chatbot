'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'
import { IoMdSend } from 'react-icons/io'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const container = useRef<HTMLDivElement>(null)

  const scroll = () => {
    container.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scroll()
  }, [messages])

  return (
    <Card className="w-3/12 shadow-xl bg-amaranth-500 text-slate-50 rounded-lg lg:w-10/12 xl:w-6/12 sm:w-11/12">
      <CardHeader className="bg-amaranth-600 rounded-t-lg">
        <CardTitle>AI Chatbot</CardTitle>
        <CardDescription className="text-slate-200">
          Your companion chatbot, using OpenAI API and Vercel SDK.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] space-y-4 pr-4 mt-5">
          {messages.length < 1 && (
            <div className="flex items-center justify-center">
              <span className="bg-amaranth-600/70 w-fit rounded-lg p-2 ">
                How can I help you?
              </span>
            </div>
          )}
          {messages.map((message) => (
            <div
              data-user={message.role === 'user'}
              key={message.id}
              className="flex justify-start gap-2 text-slate-50 mb-4 data-[user=true]:justify-end"
            >
              {message.role === 'user' && (
                <Avatar className="order-last">
                  <AvatarFallback>H</AvatarFallback>
                  <AvatarImage src="/human.png"></AvatarImage>
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>H</AvatarFallback>
                  <AvatarImage src="/robot.png"></AvatarImage>
                </Avatar>
              )}

              <p
                data-user={message.role === 'user'}
                className="leading-relaxed bg-amaranth-800 p-3 mt-2 rounded-b-lg data-[user=true]:rounded-l-lg data-[user=false]:rounded-r-lg"
              >
                {message.content}
              </p>
            </div>
          ))}

          {/* <div className="flex justify-end gap-2 text-slate-50 mb-4">
            <Avatar className="order-last">
              <AvatarFallback>H</AvatarFallback>
              <AvatarImage src="/human.png"></AvatarImage>
            </Avatar>
            <p className="leading-relaxed bg-amaranth-800 p-3 rounded-l-lg rounded-b-lg mt-2">
              What is your name?
            </p>
          </div>

          <div className="flex gap-2 text-slate-50 mb-4">
            <Avatar>
              <AvatarFallback>H</AvatarFallback>
              <AvatarImage src="/robot.png"></AvatarImage>
            </Avatar>

            <p className="leading-relaxed bg-amaranth-800 p-3 rounded-r-lg rounded-b-lg mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              magnam velit nostrum voluptates, aut amet. Voluptatum velit
              corporis architecto eum labore maxime repudiandae, ex aperiam
              ducimus temporibus esse, nisi beatae! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Soluta, sed! Quae architecto
              aspernatur ullam odio est dolores nam sequi odit! Delectus, alias?
              Voluptate, quod excepturi esse perferendis voluptatibus quia
              corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur consequuntur perferendis eum suscipit vitae ipsam
              corporis, quam tempore ratione maiores harum libero voluptatibus
              delectus illo. Temporibus rerum quaerat quia quisquam.
            </p>
          </div> */}
          <div ref={container} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="Send a message"
            value={input}
            onChange={handleInputChange}
            className="bg-amaranth-50 border-amaranth-300 text-slate-900"
          />
          <Button
            data-disabled={input.length < 1}
            size="icon"
            type="submit"
            className="bg-amaranth-900 hover:bg-amaranth-950 data-[disabled=true]:bg-transparent data-[disabled=true]:text-white/30 data-[disabled=true]:pointer-events-none"
          >
            <IoMdSend size={20} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
