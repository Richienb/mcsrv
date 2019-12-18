declare namespace ServerStatus {
    declare type Status = Offline | Online

    declare interface Offline {
        ip: string
        port: number
        debug: {
            ping: boolean
            query: boolean
            srv: boolean
            querymismatch: boolean
            ipinsrv: boolean
            animatedmotd: boolean
            proxypipe: boolean
            cachetime: number
            api_version: string
        }
        online: boolean
        hostname: string
    }

    declare interface Online extends Offline {
        debug: {
            ping: boolean
            query: boolean
            srv: boolean
            querymismatch: boolean
            ipinsrv: boolean
            animatedmotd: boolean
            proxypipe: boolean
            cachetime: number
            api_version: string
            dns: {
                [type: string]: {
                    host: string
                    class: string
                    ttl: number
                    type: string
                    ip: string
                }[]
            }
        }
        motd: {
            raw: string[]
            clean: string[]
            html: string[]
        }
        players: {
            online: number
            max: number
        }
        version: string
        protocol: number
        icon: string
    }
}

/**
 * An interface to the Minecraft Server Status API.
 * @param address The server address to lookup.
 * @example
 * ```
 * const mcsrv = require("mcsrv");
 *
 * mcsrv("mc.hypixel.net");
 * //=> { online: true, ... }
 * ```
*/
declare function mcsrv(address: string): Promise<ServerStatus.Status>;

export = mcsrv;
