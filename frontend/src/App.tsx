import React, { Suspense } from 'react'
import {
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils"
import TeamSwitcher from "@/components/my/account-switcher"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/my/nav"
import {
  File,
  Inbox,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Links {
  url: string
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
}

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  const initialLinks: Links[] = [
    {
      url: "/",
      title: "选品",
      label: "",
      icon: Inbox,
      variant: "default",
    },
    {
      url: "/about",
      title: "About",
      label: "",
      icon: File,
      variant: "ghost",
    }
  ]
  const [links, setLinks] = React.useState<Links[]>(initialLinks)

  const accounts = [
    {
      label: "Alicia Koch",
      email: "alicia@example.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Vercel</title>
          <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@gmail.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Gmail</title>
          <path
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@me.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>iCloud</title>
          <path
            d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]

  const handleLinkClick = (index: number) => {
    // 更新链接的 variant 属性
    const updatedLinks: Links[] = links.map((link, i) => {
      if (i !== index) {
        return { ...link, variant: 'ghost' }; // 更新其他链接的 variant
      } else {
        return { ...link, variant: 'default' }; // 更新被点击链接的 variant
      }
    });
    console.log(updatedLinks);
    setLinks(updatedLinks); // 更新状态
    navigate(links[index].url)
  };

  return (
    <>
      <div className='flex'>
        <div className='w-[220px] border-r h-[100vh]'>
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <TeamSwitcher />
          </div>
          <Separator />
          <Nav
            links={links}
            onLinkClick={handleLinkClick}
          />
        </div>
        <div className='w-full'>
          <Suspense fallback={<p>Loading...</p>}>
            {useRoutes(routes)}
          </Suspense>
        </div>
      </div>
    </>
  )
};

export default App;