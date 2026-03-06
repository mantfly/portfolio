export const projects = [
   
    {
      id: "accessible-transport",
      title: "SL Accessible Public Transport",
      company: "KTH Royal Institute of Technology",
      year: "2025",
      role: "UX Researcher & Designer",
      intro: "Redesigning Stockholm's SL public transport system to improve accessibility for people with disabilities. Based on the EU Accessibility Act and Swedish accessibility laws, we conducted user research and developed solutions for more inclusive travel experiences.",
      
      content: [
        {
          type: "text",
          content: "Redesigning Stockholm's SL public transport system to improve accessibility..."
        },
        {
          type: "image",
          src: "/public/img/sl/sl.png",
        },
        {
          type: "text", 
          content: "Through user discussions we identified 8 key areas for improvement..."
        },
        {
          type: "image",
          src: "/public/img/sl/solutions.jpg",
          caption: "Key solutions overview"
        }
      ],

      visualMatches: {
        title: "Key Findings",
        images: [
          { src: "/public/img/sl/research-1.jpg", caption: "User interviews" },
          { src: "/public/img/sl/research-2.jpg", caption: "Affinity diagram" },
          { src: "/public/img/sl/research-3.jpg", caption: "Issues board" }
        ]
      },
      
      additionalContent: {
        title: "Core Challenges",
        description: "Through user discussions and affinity diagramming, we identified 8 key areas for improvement: station navigation, crowding management, display readability, information accessibility, in-app route planning, digital service fixes, delay handling, and feedback systems."
      },
      
      solutions: [
        {
          title: "Delay Information",
          items: ["Community-based disruption updates", "Real-time visual information", "Large high-contrast signs"]
        },
        {
          title: "Map Functionality",
          items: ["Real-time bus/train location", "Customizable information layers", "Alternative route suggestions", "Accessibility icons for wheelchair routes"]
        },
        {
          title: "Station Information",
          items: ["Occupancy visualization", "Accessibility exit info", "Stroller seat availability", "Elevator/lift status"]
        }
      ],
      
      designProcess: {
        title: "Design Process",
        steps: [
          "Ideation & Conceptional Design - Brainstorming sessions with idea passing",
          "Lotus Blossom Method - Expanding core concepts into detailed features",
          "Dot Voting - Prioritizing most valuable solutions",
          "User Journey Mapping - Testing with persona scenarios"
        ]
      },
      
      keyTakeaways: [
        {
          name: "Chi Chen",
          quote: "Understanding how users interact with the system—whether through visual, auditory, or tactile cues—helped me realize that accessibility is not one-size-fits-all."
        },
        {
          name: "Olle",
          quote: "I found the 'born accessible' approach particularly interesting, as it resonated with my prior understanding of path dependency and how design choices can affect costs."
        },
        {
          name: "Katrin",
          quote: "It is important when aiming for a Universal Design to try and stay broad in the research and ideation process to stay inclusive to all."
        }
      ],
      
      links: [
        {
          title: "EU Accessibility Act",
          url: "https://ec.europa.eu/social/main.jsp?catId=1202"
        },
        {
          title: "SL Official Site",
          url: "https://sl.se"
        }
      ]
    },
    
    // 其他项目保持不变...
  ];