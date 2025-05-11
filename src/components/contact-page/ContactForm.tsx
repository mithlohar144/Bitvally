
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 transition-transform hover:scale-105 active:scale-95">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1"
          aria-describedby="name-error"
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1"
          aria-describedby="email-error"
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1"
          aria-describedby="message-error"
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
