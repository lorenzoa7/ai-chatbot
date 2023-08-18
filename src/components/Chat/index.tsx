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
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] shadow-xl">
      <CardHeader>
        <CardTitle>AI Chatbot</CardTitle>
        <CardDescription>Your companion chatbot!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-2 text-slate-600">
            {message.role === 'user' && (
              <Avatar>
                <AvatarFallback>H</AvatarFallback>
                <AvatarImage src="https://github.com/lorenzoa7.png"></AvatarImage>
              </Avatar>
            )}

            {message.role === 'assistant' && (
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
                <AvatarImage src="https://github.com/openai.png"></AvatarImage>
              </Avatar>
            )}

            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">
                {message.role === 'user' ? 'Human:' : 'Chatbot:'}
              </span>
              {message.content}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="Send a message"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
