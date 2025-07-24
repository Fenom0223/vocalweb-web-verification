// This file is machine-generated - edit with caution!
'use server';

/**
 * @fileOverview An AI agent for processing emails.
 *
 * - processEmail - A function that processes an email and provides a summary or classification.
 * - ProcessEmailInput - The input type for the processEmail function.
 * - ProcessEmailOutput - The return type for the processEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProcessEmailInputSchema = z.object({
  emailContent: z
    .string()
    .describe('The complete content of the email to be processed.'),
  processingType: z
    .enum(['summary', 'classification'])
    .describe('The type of processing to be performed: summary or classification.'),
  classificationInstructions: z
    .string()
    .optional()
    .describe(
      'Instructions for classification, such as categories or keywords to use.'
    ),
});
export type ProcessEmailInput = z.infer<typeof ProcessEmailInputSchema>;

const ProcessEmailOutputSchema = z.object({
  result: z.string().describe('The summary or classification result of the email.'),
});
export type ProcessEmailOutput = z.infer<typeof ProcessEmailOutputSchema>;

export async function processEmail(input: ProcessEmailInput): Promise<ProcessEmailOutput> {
  return processEmailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'processEmailPrompt',
  input: {schema: ProcessEmailInputSchema},
  output: {schema: ProcessEmailOutputSchema},
  prompt: `You are an AI assistant specialized in email processing.

You will receive the content of an email and a processing type.

If the processing type is 'summary', provide a concise summary of the email content.

If the processing type is 'classification', classify the email based on the following instructions:
{{{classificationInstructions}}}

Email Content: {{{emailContent}}}`,
});

const processEmailFlow = ai.defineFlow(
  {
    name: 'processEmailFlow',
    inputSchema: ProcessEmailInputSchema,
    outputSchema: ProcessEmailOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
