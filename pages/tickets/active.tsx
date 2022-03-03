import type { NextPage } from "next"
import { Tickets } from "../../src/components/Tickets"
import { TICKET_STATUS } from "../../src/utils/ticket-types"

const ActiveTickets: NextPage = () => {
  return <Tickets mineOnly={false} status={TICKET_STATUS.ACTIVE} />
}

export default ActiveTickets
