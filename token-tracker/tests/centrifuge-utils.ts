import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { Deny, File, Rely } from "../generated/centrifuge/centrifuge"

export function createDenyEvent(user: Address): Deny {
  let denyEvent = changetype<Deny>(newMockEvent())

  denyEvent.parameters = new Array()

  denyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return denyEvent
}

export function createFileEvent(what: Bytes, data: string): File {
  let fileEvent = changetype<File>(newMockEvent())

  fileEvent.parameters = new Array()

  fileEvent.parameters.push(
    new ethereum.EventParam("what", ethereum.Value.fromFixedBytes(what))
  )
  fileEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return fileEvent
}

export function createRelyEvent(user: Address): Rely {
  let relyEvent = changetype<Rely>(newMockEvent())

  relyEvent.parameters = new Array()

  relyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return relyEvent
}
