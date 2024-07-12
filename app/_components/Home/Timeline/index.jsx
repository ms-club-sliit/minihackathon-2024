"use client"
import TimelineData from '@/app/data/Timeline'
import TimelineItem from '@/app/_components/Home/Timeline/TimelineItem'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  const TimelineNode = ({ top }) => (
    <div 
      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"
      style={{ top: `${top}%` }}
    ></div>
  );
  return (
    <main>
      <h1 id="timeline" className="text-6xl font-bold">Timeline</h1>
      <VerticalTimeline lineColor='#fff'>
      {
        TimelineData.map((timeline,index)=>(
 
          <VerticalTimelineElement
          key={index}
          visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ boxShadow:'0px 2px 9px #807E7E', borderRadius:'15px'}}
            contentArrowStyle={{ borderLeft: '10px solid  #0080FF', border: '10px solid  #0080FF', borderRadius:"20px 20px", }}
            //date={timeline.date}
            iconStyle={{ background: '#0080FF', borderStyle: 'solid', borderWidth: '10px', borderColor: '#434040' }}
            //icon={timelineIcon}
          >
            <h3 className="text-[10px] text-[#0080FF] font-semibold">{timeline.date}</h3>
            <h4 className="text-[14px] text-[#161414] font-bold">{timeline.title}</h4>
            <p className="text-[9px] text-[#334155] font-semibold">
              {timeline.description}
            </p>
          </VerticalTimelineElement>
        
        ))
      }
      </VerticalTimeline>
{/* <div className="container mx-auto p-4 lg:p-8">
      <div className="relative">
        // Gradient vertical line 
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 lg:-translate-x-1/2">
          <div className="h-full w-full bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 rounded-full shadow-lg shadow-blue-300/50"></div>
        </div>
        
        // Timeline items 
        {TimelineData.map((event, index) => (
          <div key={index} className="relative">
            // Timeline node
            <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white lg:-translate-x-1/2"
                 style={{ top: `${index * 200}px` }}></div>
            
            //</main> Timeline item 
            <TimelineItem {...event} index={index} />
          </div>
        ))}
      </div>
    </div> 
    */}
    </main>
  );
}
