<template>
  <header class="navbar px-6">
    <nav class="py-4 mx-auto relative flex justify-between items-center">
      <a to="/" class="nav-logo text-xl font-semibold z-10">
        Jack
      </a>

      <ul class="flex items-center gap-4 sm:gap-6 w-fit justify-end">
        <li class="hidden sm:block">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="link text-lg">
            Navbar
          </a>
        </li>

        <li class="flex sm:hidden">
            <MobileMenu />
        </li>
      </ul>
      
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
.nav-menu {
  overflow: hidden;
  --menu-bg: #70a2e1;
  --menu-footer: #3c61e5;
  --dark-menu-bg: #1c1c1c;
  --dark-menu-footer: #161616;
}

.nav-wrapper {
  position: absolute;
  width: 100%;
  height: 0;
  top: 100%;
  right: 0;
  transform-origin: top right;
  z-index: 1;
  border-radius: 1.5rem;
  opacity: 0;
  background-color: transparent;
}

.nav-wrapper-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #131212;
  background-color: var(--menu-bg);
  border-radius: 1.5rem;
  right: 0;
  position: absolute;
  overflow: hidden;
  will-change: transform, width, height;
}

.nav-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  transform: scaleX(0);
}

ul {
  width: 100%;
  padding: 1.75rem 2rem !important;
}

.menu-item {
  list-style: none;
  margin-bottom: .5rem;
  font-size: 2.25rem;
  opacity: 0;
  transform: translateX(60px);
  font-weight: 600;
  will-change: transform, opacity;
  transform: translateZ(0);
}

.menu-item:last-child {
  margin-bottom: 0;
}


.nav-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1.75rem 0;
  gap: 10px;
  margin-left: auto;
  position: relative;
}

.footer-bg {
  height: 100%;
  position: absolute;
  width: 0%;
  right: 0;
  background-color: var(--menu-footer);
  border-radius: 1px 0 1.5rem 1.5rem;
}

.nav-footer span {
  color: white;
  transition: color .2s;
}

.nav-footer span:hover {
  color: #131212;
}

.nav-footer-icons {
  display: flex;
  gap: 10px;
  /* width: 100%; */
  padding: 0 2rem;
}

.nav-footer-icons a {
  display: flex;
}

.hamburger-button {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  background-color: var(--menu-bg);
  pointer-events: auto;
  z-index: 9999;
  transition: background-color 0.2s ease;
}

.active-hamburger {
  background-color: var(--menu-footer);
}

.hamburger {
  width: 17px;
  height: 9px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  border-radius: 999em;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(3px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  transform: translateY(-3px) rotate(-45deg);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(253, 250, 245, .8);
  opacity: 0;
  transition: opacity .2s linear;
  pointer-events: none;
  will-change: opacity;
}

.dark-mode .nav-wrapper-inner {
  background-color: var(--dark-menu-bg);
  color: #DDDDDD;
}

.dark-mode .footer-bg {
  background-color: var(--dark-menu-footer);
}

.dark-mode .nav-footer span {
  color: #DDDDDD;
}

.dark-mode .nav-footer span:hover {
  color: #fff;
}

.dark-mode .hamburger-button {
  background-color: var(--dark-menu-bg);
}

.dark-mode .hamburger span {
  background-color: #DDDDDD;
}


.dark-mode .menu-overlay {
  background-color: rgba(18, 18, 18, 0.8)
}

.router-link-active:before {
  position: absolute;
  top: calc(50% - 3px);
  left: -1rem;
  display: none;
  width: 6px;
  height: 6px;
  background: currentcolor;
  border-radius: 50%;
  transform: translate3d(1rem, 0, 0) scale(0);
  transition: transform 4s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.router-link-active:before {
  display: block;
}

.router-link-active:before {
  transform: translate3d(0, 0, 0) scale(1);
}

.pointer-events-auto {
  pointer-events: auto !important;
}

.disable {
  pointer-events: none;
}

.menu-disabled {
  /* opacity: 0 !important; */
  pointer-events: none;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  right: 0;
  left: 0;
  pointer-events: auto !important;
}
</style>