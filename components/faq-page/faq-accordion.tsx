"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "What is Drive2Ride?",
    answer:
      "Drive2Ride is an accessible and assisted transport service designed for people with disability, elderly passengers, carers, families, support coordinators, and community service providers. We help passengers travel safely to appointments, therapy, work, education, community activities, shopping, and daily living needs.",
  },
  {
    question: "Who can use Drive2Ride?",
    answer:
      "Drive2ride is suitable for people with disability, elderly passengers, NDIS participants, carers and family members booking on behalf of passengers, support coordinators and care providers, and passengers who need wheelchair support, mobility assistance, or extra care during transport.",
  },
  {
    question: "How does the Drive2Ride website work",
    answer:
      "The Drive2ride website allows users to either offer rides (drivers) or search for available rides (passengers). Drivers can post their travel plans, including the starting point, destination, date, time, and number of available seats. Passengers can search for rides that match their criteria and request to join the ride. Once matched, the driver and passenger(s) communicate to finalize details such as pickup location and any other arrangements.",
  },
  {
    question: "What types of trips can I book?",
    answer:
      "You can book transport for medical appointments, therapy sessions, hospital or clinic visits, shopping and daily living trips, community participation, work or education travel, social and family visits, and disability and aged care transport needs.",
  },
  {
    question: "Does Drive2Ride offer wheelchair accessible transport?",
    answer:
      "Yes. Drive2ride is designed to support wheelchair users and passengers with mobility needs. Customers can add wheelchair, mobility aid, assistance level, and pickup instructions when booking so the correct transport support can be arranged.",
  },
  {
    question: "Are Drive2Ride drivers trained?",
    answer:
      "Drive2ride driver partners are onboarded with a focus on safety, respectful passenger care, reliability, accessibility awareness, privacy, and professional service standards.",
  },
  {
    question: "Can I add special passenger notes?",
    answer:
      "Yes. You can add notes such as wheelchair or mobility aid requirements, assistance needed at pickup or drop off, preferred communication method, hearing or vision support needs, medical or safety notes, emergency contact details, and gate access, parking, or building entry instructions.",
  },
  {
    question: "Does Drive2Ride provide real time tracking?",
    answer:
      "Drive2ride is designed to support real time trip updates so passengers, carers, and family members can stay informed before and during the journey.",
  },
  {
    question: "Is Drive2Ride available in Canberra and the ACT?",
    answer:
      "Drive2ride is focused on supporting the Canberra and ACT community, with a mission to improve accessible transport for people who need extra care and mobility support.",
  },
  {
    question: "Can organisations partner with Drive2Ride?",
    answer:
      "Yes. Drive2ride welcomes partnership discussions with community organisations, healthcare providers, aged care providers, disability support providers, charities, and local ACT organisations that support vulnerable community members.",
  },
  {
    question: "Can I become a Drive2Ride driver partner?",
    answer:
      "Yes. Drive2ride welcomes responsible and caring driver partners who want to support people with disability, elderly passengers, and community members needing safe and respectful transport.",
  },
  {
    question: "What if I need to cancel my ride or my plans change?",
    answer:
      "We understand that plans can change unexpectedly. If you need to cancel a ride as a driver or passenger, we encourage you to communicate with your ride partner(s) as soon as possible to minimize inconvenience. Depending on the circumstances, there may be a cancellation policy in place to address any potential issues. Be sure to review our terms of service for more information.",
  },
  {
    question: "What should I include when booking?",
    answer:
      "You should include the pickup and drop off address, passenger name and contact details, mobility or wheelchair requirements, assistance level required, appointment time if applicable, an emergency contact, and any special instructions for access, parking, or communication.",
  },
  {
    question: "How can I trust the people I ride with?",
    answer:
      "Trust and safety are fundamental principles of our platform. We encourage users to complete their profiles with accurate information, verify their identities, and review the ratings and reviews of potential ride partners before agreeing to share a ride. Additionally, we provide secure messaging and support services to address any concerns that may arise during the ride sharing process.",
  },
  {
    question: "What should I do if I encounter a problem during a ride?",
    answer:
      "If you encounter any issues or concerns during a ride, such as unsafe driving behavior or discomfort, we urge you to communicate with your ride partner(s) immediately and take appropriate action to address the situation. You can also reach out to our customer support team for assistance, and we will do our best to resolve the issue promptly.",
  },
  {
    question:
      "Can I offer or search for rides for specific events or destinations?",
    answer:
      "Yes, our platform allows users to offer or search for rides for specific events, destinations, or purposes. Whether you're attending a concert, sporting event, or planning a weekend getaway, you can post or find rides tailored to your needs and preferences. Simply specify the details of your trip when creating or searching for ride listings.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion.Root type="single" defaultValue="item-0" collapsible>
      {FAQ_ITEMS.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className={cn(
            "group border-b border-neutral-200 last:border-b-0",
            "data-[state=open]:border-b-0",
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "flex w-full items-center justify-between gap-4 rounded-t-2xl px-6 py-6 text-left transition-colors",
                "group-data-[state=open]:bg-neutral-100",
              )}
            >
              <span className="font-bold text-neutral-900">
                {item.question}
              </span>
              <Plus className="h-5 w-5 shrink-0 text-neutral-900 group-data-[state=open]:hidden" />
              <Minus className="hidden h-5 w-5 shrink-0 text-neutral-900 group-data-[state=open]:block" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={cn(
              "overflow-hidden rounded-b-2xl bg-neutral-100",
              "data-[state=open]:animate-[accordion-down_250ms_ease-out]",
              "data-[state=closed]:animate-[accordion-up_200ms_ease-in]",
            )}
          >
            <p className="px-6 pb-6 leading-relaxed text-neutral-600">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
