import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Company name must be at least 2 characters" })
    .max(100, { message: "Company name must be less than 100 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual submission logic (e.g., API call, email service)
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24-48 hours.",
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request Early Access</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you within 24-48 hours.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your use case and how you plan to use RekognizeAI..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-brand-cyan to-primary hover:shadow-lg hover:shadow-brand-cyan/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
