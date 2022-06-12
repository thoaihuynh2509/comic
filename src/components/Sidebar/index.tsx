import React from 'react'
import SidebarNothing from '../../modules/SidebarNothing'
import SidebarSelected from '../../modules/SidebarSelected'

export type StatusType = 'nothing' | 'selected'

interface ISidebarProps {
  status?: StatusType
}

export default function Sidebar({
  status = 'nothing'
}: ISidebarProps) {
  return (
    <aside>
      {status !== 'nothing' ? <SidebarNothing /> : <SidebarSelected />}
    </aside>
  )
}