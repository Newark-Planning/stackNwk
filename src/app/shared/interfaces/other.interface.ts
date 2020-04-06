export interface SidebarLink {
    name: string;
    icon: string;
    link: string;
    children?: Array<SidebarLink>;
}
