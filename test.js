import test from "ava"
import mcsrv from "."

test("main", async (t) => {
    const { online } = await mcsrv("mc.hypixel.net")
    t.true(online)
})
