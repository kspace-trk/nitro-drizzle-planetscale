import { db } from '../../db'
import { users } from "../../db/schema";

export default eventHandler(async () => {
  const result = await db.select().from(users);
  return {
    status: {
      code: 200,
      message: 'OK',
    },
    data: result
  }
})
