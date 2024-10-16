import axios from 'axios'
import { ApiResponse } from '@/types/ApiResponse'
import { AxiosError } from 'axios'
import React, { useTransition } from 'react'
import toast from 'react-hot-toast'
import { Button } from '../ui/button'
import GeneratePrompt from '@/lib/generate-prompt'

type LoadSuggestMessagesProps = {
    setText: (text: string) => void
}

const LoadSuggestMessages = ({ setText }: LoadSuggestMessagesProps) => {
    const [isPending, startTransition] = useTransition()

    // generate suggest messages
    const loadSuggestMessages = () => {
        const prompt = GeneratePrompt();
        startTransition(async () => {
            try {
                const { data: response } = await axios.post<ApiResponse>('/api/suggest-messages', { prompt })
                if (response.success) {
                    setText(response.message)
                } else {
                    toast.error(response.message)
                }
            } catch (error) {
                const axiosError = error as AxiosError<ApiResponse>
                toast.error(axiosError.response?.data?.message || "Error while registering. Please try again later.")
            }
        })
    }

    return (
        <>
            <Button onClick={loadSuggestMessages} disabled={isPending}>
                Suggest Messages
            </Button>
        </>
    )
}

export default LoadSuggestMessages