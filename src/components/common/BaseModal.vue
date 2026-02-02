<template>
  <div class="modal">
    <header class="baseModal_header">
      <slot name="header" />
    </header>

    <main class="baseModal_body">
      <slot />
    </main>

    <footer class="baseModal_footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.modal {
    border: 0.2rem solid gray;
    border-radius: 1.5rem;
}
.baseModal_header {
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 0.1rem solid gray;
}
.baseModal_body {
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 2rem;
}
.baseModal_footer {
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 0.1rem solid gray;
}
</style>