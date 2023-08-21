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
import TextArea from 'react-textarea-autosize'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
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
    <Card className="relative w-3/12 shadow-xl bg-amaranth-500 text-slate-50 rounded-lg lg:w-10/12 xl:w-6/12 sm:w-11/12">
      <CardHeader className="bg-amaranth-600 rounded-t-lg">
        <CardTitle>AI Chatbot</CardTitle>
        <CardDescription className="text-slate-200">
          Your companion chatbot, using OpenAI API and Vercel SDK.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] lg:h-[640px] sm:h-[450px] 2xl:h-[450px] space-y-4 pr-4 mt-5 mb-14">
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

          <div ref={container} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full">
        <form className="flex items-end gap-2 w-full" onSubmit={handleSubmit}>
          <TextArea
            rows={2}
            maxRows={6}
            autoFocus
            placeholder="Send a message"
            value={input}
            onChange={handleInputChange}
            className="flex h-10 w-full bg-amaranth-50 border-amaranth-300 text-slate-900 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
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
