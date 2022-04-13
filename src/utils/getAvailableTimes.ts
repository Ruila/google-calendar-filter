import { GetCalendarByIdEventItemType } from "../types/GetCalendarByIdEventItemType"

export const getAvailableTimes = (
  busySlot: Array<GetCalendarByIdEventItemType>
) => {
  const sortBusySlot = busySlot.sort(function(a,b){
    return (new Date(b.start.dateTime) as any) - (new Date(a.start.dateTime) as any);
  });

  console.info("sortBusySlot",busySlot, sortBusySlot)
}
