'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Schedule = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Timeline cards animation
      const timelineCards = timelineRef.current?.children;
      if (timelineCards) {
        gsap.fromTo(timelineCards,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Stats animation
      const statsCards = statsRef.current?.children;
      if (statsCards) {
        gsap.fromTo(statsCards,
          {
            y: 60,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scheduleItems = [
    {
      time: '9:30 AM',
      title: 'Entry & Registration',
      type: 'break',
      location: 'Main Lobby',
      duration: '30 min',
      description: 'Attendee check-in, ID verification, and seating arrangement'
    },
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      type: 'ceremony',
      speaker: 'TEDx Team',
      location: 'Main Auditorium',
      duration: '30 min',
      description: 'Welcome by host and introduction to TEDx and the event theme'
    },
    {
      time: '10:30 AM',
      title: 'Speaker 1',
      type: 'talk',
      speaker: 'Guest Speaker',
      location: 'Main Auditorium',
      duration: '20 min',
      description: 'Inspiring TEDx talk session'
    },
    {
      time: '10:50 AM',
      title: 'Speaker 2',
      type: 'talk',
      speaker: 'Guest Speaker',
      location: 'Main Auditorium',
      duration: '20 min',
      description: 'Inspiring TEDx talk session'
    },
    {
      time: '11:10 AM',
      title: 'Creative Segment',
      type: 'panel',
      location: 'Main Auditorium',
      duration: '20 min',
      description: 'Poetry, storytelling, performances, and digital or visual showcase'
    },
    {
      time: '11:30 AM',
      title: 'Speaker 3',
      type: 'talk',
      speaker: 'Guest Speaker',
      location: 'Main Auditorium',
      duration: '20 min',
      description: 'Inspiring TEDx talk session'
    },
    {
      time: '11:50 AM',
      title: 'Speaker 4',
      type: 'talk',
      speaker: 'Guest Speaker',
      location: 'Main Auditorium',
      duration: '20 min',
      description: 'Inspiring TEDx talk session'
    },
    {
      time: '12:10 PM',
      title: 'Networking Break',
      type: 'break',
      location: 'Foyer Area',
      duration: '20 min',
      description: 'Refreshments and networking with attendees'
    },
    {
      time: '12:30 PM',
      title: 'Audience Interaction',
      type: 'panel',
      speaker: 'Host & Audience',
      location: 'Main Auditorium',
      duration: '30 min',
      description: 'Open mic Q&A, feedback collection, and fun activity'
    },
    {
      time: '1:00 PM',
      title: 'Closing Ceremony',
      type: 'ceremony',
      speaker: 'TEDx Team',
      location: 'Main Auditorium',
      duration: '30 min',
      description: 'Certificate distribution, thank you note, and group photo'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'talk': return 'bg-[#EB0028] text-white';
      case 'break': return 'bg-teal-400 text-neutral-900';
      case 'ceremony': return 'bg-yellow-500 text-neutral-900';
      case 'panel': return 'bg-neutral-200 text-neutral-900';
      default: return 'bg-neutral-500 text-white';
    }
  };

  return (
    <section id="schedule" ref={sectionRef} className="section-padding bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 ref={titleRef} className="heading-lg">
            Event <span className="text-[#EB0028]">Schedule</span>
          </h2>
          <p className="body-text max-w-4xl mx-auto px-2">
            A day packed with inspiring talks, networking opportunities, and transformative ideas.
            Scroll through our comprehensive event timeline.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div ref={timelineRef} className="overflow-x-auto pt-4 pb-6 sm:pb-8 -mx-3 xs:-mx-4 sm:mx-0">
            <div className="flex gap-4 sm:gap-6 md:gap-8 min-w-max px-3 xs:px-4 sm:px-0">
              {scheduleItems.map((item, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-64 xs:w-72 sm:w-80 bg-neutral-900 border border-neutral-800 hover:border-teal-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] rounded-none"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 text-[#EB0028] font-bold text-lg sm:text-xl">
                        <Clock size={18} className="sm:w-6 sm:h-6 flex-shrink-0" />
                        {item.time}
                      </div>
                      <Badge className={`${getTypeColor(item.type)} rounded-none`}>
                        {item.type}
                      </Badge>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 line-clamp-2">
                      {item.title}
                    </h3>

                    {item.speaker && (
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <User size={16} className="sm:w-[18px] sm:h-[18px] text-[#EB0028] flex-shrink-0" />
                        <span className="text-neutral-200 font-medium text-sm sm:text-base">{item.speaker}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-[#EB0028] flex-shrink-0" />
                      <span className="text-neutral-400 text-sm sm:text-base">{item.location}</span>
                    </div>

                    <div className="text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-4 font-medium">
                      Duration: {item.duration}
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 text-neutral-400 text-xs sm:text-sm">
              <span>Scroll horizontally to view all sessions</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#EB0028] animate-bounce"></div>
                <div className="w-2 h-2 bg-[#EB0028] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#EB0028] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div ref={statsRef} className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="text-center p-4 sm:p-6 md:p-8 bg-neutral-900 border border-neutral-800 hover:border-[#EB0028] transition-all duration-300 rounded-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EB0028] mb-2 sm:mb-3">4</div>
            <div className="text-neutral-200 font-medium text-xs sm:text-sm md:text-base">Inspiring Talks</div>
          </div>
          <div className="text-center p-4 sm:p-6 md:p-8 bg-neutral-900 border border-neutral-800 hover:border-[#EB0028] transition-all duration-300 rounded-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EB0028] mb-2 sm:mb-3">2</div>
            <div className="text-neutral-200 font-medium text-xs sm:text-sm md:text-base">Ceremonies</div>
          </div>
          <div className="text-center p-4 sm:p-6 md:p-8 bg-neutral-900 border border-neutral-800 hover:border-[#EB0028] transition-all duration-300 rounded-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EB0028] mb-2 sm:mb-3">2</div>
            <div className="text-neutral-200 font-medium text-xs sm:text-sm md:text-base">Interactive Segments</div>
          </div>
          <div className="text-center p-4 sm:p-6 md:p-8 bg-neutral-900 border border-neutral-800 hover:border-[#EB0028] transition-all duration-300 rounded-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EB0028] mb-2 sm:mb-3">4 hrs</div>
            <div className="text-neutral-200 font-medium text-xs sm:text-sm md:text-base">Event Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;