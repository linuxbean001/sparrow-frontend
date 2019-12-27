import { useRef, useEffect, useState } from 'react';

const useDropdown = () => {
  const btnRef = useRef();
  const menuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
    menuRef.current.classList.add('hidden');
  };
  const toggle = () => {
    setOpen(!isOpen);
    menuRef.current.classList.toggle('hidden');
  };

  useEffect(() => {
    const bodyHandler = event => {
      if (
        isOpen &&
        !menuRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        close();
      }
    };

    document.addEventListener('click', bodyHandler);
    return () => {
      document.removeEventListener('click', bodyHandler);
    };
  }, [isOpen]);

  return {
    menuRef,
    btnRef,
    toggle,
  };
};

export default useDropdown;
