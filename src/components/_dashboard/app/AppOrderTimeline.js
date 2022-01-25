import PropTypes from "prop-types";
// material
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";
// utils
import { fDate } from "../../../utils/formatTime";

// ----------------------------------------------------------------------

const TIMELINE_TYPES = {
  OTHER: "0",
  GRADUATION: "1",
  WORK: "2",
  ACHIEVEMENT: "3",
};

const TIMELINES = [
  {
    title: "Born. Xinyang, Henan, China",
    time: "1994.11.28",
    type: TIMELINE_TYPES.OTHER,
  },
  {
    title:
      "B.Sc. in Physics, Southern University of Science and Technology. Shenzhen, Guangdong, China",
    time: "2016.7.1",
    type: TIMELINE_TYPES.GRADUATION,
  },
  {
    title:
      "Ph.D. in Theoretical Physics, University of Tennessee. Knoxville, TN, USA",
    time: "2021.7.26",
    type: TIMELINE_TYPES.GRADUATION,
  },
  {
    title: "Java Developer, JRI-America, SMBC. New York City, NY, USA",
    time: "2021.8.16",
    type: TIMELINE_TYPES.WORK,
  },
  {
    title: "Volunteer Full Stack Developer, Noble Tree Publish, Inc. Remote",
    time: "2020.2.1",
    type: TIMELINE_TYPES.WORK,
  },
  {
    title: "HSD. Zhengzhou No.1 High School. Zhengzhou, Henan, China",
    time: "2012.7.1",
    type: TIMELINE_TYPES.GRADUATION,
  },
];

const TIMELINES_SORTED = TIMELINES.sort((a, b) => {
  let aTime = new Date(a.time);
  let bTime = new Date(b.time);
  return bTime - aTime;
});
// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === TIMELINE_TYPES.GRADUATION && "primary.main") ||
              (type === TIMELINE_TYPES.WORK && "success.main") ||
              (type === TIMELINE_TYPES.OTHER && "warning.main") ||
              (type === TIMELINE_TYPES.ACHIEVEMENT && "info.main") ||
              "error.main",
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {fDate(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
      }}
    >
      <CardHeader title="Timeline" />
      <CardContent>
        <Timeline>
          {TIMELINES_SORTED.map((item, index) => (
            <OrderItem
              key={item.title}
              item={item}
              isLast={index === TIMELINES_SORTED.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
