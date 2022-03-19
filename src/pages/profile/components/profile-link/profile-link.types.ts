type ProfileLinkProps = {
  title?: string;
  className?: string;
  events?: {
      click: (e: Event) => void
  }
}

export {
    ProfileLinkProps
};
