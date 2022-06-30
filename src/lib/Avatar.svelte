<script lang="ts">
  import avatar from "../assets/avatar.svg"
</script>

<div>
  <img src={avatar} alt="Profile Icon" />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 15px;
  }

  img {
    width: 3.5cm;
    border-radius: 50%;
  }
</style>
