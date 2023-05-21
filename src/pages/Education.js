import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "../components/styles/Education.css";

function Education() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2021-2025'
            iconStyle={{background: "#e9d35b"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'> Vellore Institute of Technology, Vellore </h3>
                <p> B.Tech, Computer Science and Engineering, CGPA: 9.15 </p>
            </VerticalTimelineElement>
        


        
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2019-2021'
            iconStyle={{background: "#e9d35b"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'> Sri Chaitanya Junior Kalasala, Kukatpally, Hyderabad, India </h3>
                <p> 12th Grade, PCT: 98.2% </p>
            </VerticalTimelineElement>
       

        
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2018-2019'
            iconStyle={{background: "#e9d35b"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'> DAV Public School, Kukatpally, Hyderabad, India </h3>
                <p> 10th Grade, PCT: 88.4% </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2014-2018'
            iconStyle={{background: "#e9d35b"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'> DAV Public School, Kukatpally, Hyderabad, India </h3>
                <p>High School</p>
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
  )
}

export default Education