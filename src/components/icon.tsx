/* eslint-disable no-unused-vars */
'use client'
import { IconBaseProps, IconType } from 'react-icons'
import * as IconsBs from 'react-icons/bs'
import * as IconsCi from 'react-icons/ci'
import * as IconsFa from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as IconsLu from 'react-icons/lu'
import * as IconsMd from 'react-icons/md'
import * as IconsTfi from 'react-icons/tfi'

type IconGroup = 'Fa' | 'Md' | 'Tf' | 'Bs' | 'Lu' | 'Ci' | 'Io'

type IconNameFa = keyof typeof IconsFa
type IconNameMd = keyof typeof IconsMd
type IconNameTfi = keyof typeof IconsTfi
type IconNameBs = keyof typeof IconsBs
type IconNameLu = keyof typeof IconsLu
type IconNameCi = keyof typeof IconsCi
type IconNameIo = keyof typeof IoIcons

export type IconProps = IconBaseProps & {
  name:
    | IconNameFa
    | IconNameMd
    | IconNameTfi
    | IconNameBs
    | IconNameLu
    | IconNameCi
    | IconNameIo
}

export function Icon({ name, ...rest }: IconProps) {
  const iconGroup = name.slice(0, 2) as IconGroup

  const Icon: { [K in IconGroup]: IconType } = {
    Fa: IconsFa[name as IconNameFa],
    Md: IconsMd[name as IconNameMd],
    Tf: IconsTfi[name as IconNameTfi],
    Bs: IconsBs[name as IconNameBs],
    Lu: IconsLu[name as IconNameLu],
    Ci: IconsCi[name as IconNameCi],
    Io: IoIcons[name as IconNameIo]
  }

  const IconElement = Icon[iconGroup]

  return <IconElement {...rest} />
}
