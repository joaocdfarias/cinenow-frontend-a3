import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

const Logo = (props: HTMLAttributes<HTMLImageElement>) => {
  return (
    <Link href="/">
      <Image
        alt="CineNow Logo"
        src="/logo.svg"
        width={205}
        height={32}
        priority
        {...props}
      />
    </Link>
  )
}

export default Logo
