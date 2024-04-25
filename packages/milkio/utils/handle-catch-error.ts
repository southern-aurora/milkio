import { failCode } from "../../../src/fail-code"
import { useLogger, type ExecuteId, type ExecuteResult } from ".."
import { configMilkio } from "../../../src/config/milkio"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hanldeCatchError(error: any, executeId: ExecuteId): ExecuteResult<any> {
  const logger = useLogger(executeId)

  if (configMilkio.debug === true) {
    logger.error("\nError Data: " + JSON.stringify(error))
    if (error.stack) logger.error("\nError Stack: ", error.stack)
    else logger.error("\nError Stack: ", error)
  }

  if (error.name !== "MilkioReject") {
    if (configMilkio.debug === true) {
      // If it is not MilkioReject, it is considered an internal server error that should not be exposed
      logger.error(`FailCode: INTERNAL_SERVER_ERROR`)
    }

    return {
      executeId,
      success: false,
      fail: {
        code: "INTERNAL_SERVER_ERROR",
        message: failCode.INTERNAL_SERVER_ERROR(),
        data: undefined
      }
    }
  } else {
    if (configMilkio.debug === true) {
      logger.error(`FailCode: ${error.code}`)
    }

    return {
      executeId,
      success: false,
      fail: {
        code: error.code,
        message: error.message,
        data: error.data
      }
    }
  }
}
