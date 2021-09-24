<template>
    <header>
        <nav id="toolbar">
            <ul class="nav-menu">
				        <li>
                    <p @click="goAbout()">About</p>
                </li>
                <li>
                    <p @click="goContact()">Contanct</p>
                </li>
			      </ul>
        </nav>
    </header>
</template>


<script>

export default{
  methods: {
    goAbout(){
      this.$router.push('/about')
    },
    goContact(){
      this.$router.push('/contact')
    }
  }
}
</script>

