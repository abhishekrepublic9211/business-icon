<script lang="ts">
  export let id: string = '';
  // Placeholder for guest data if needed
  const guests = [
    { name: 'Name of Guest', designation: 'Designation of Guest', image: '/guest.png' },
    { name: 'Name of Guest', designation: 'Designation of Guest', image: '/guest.png' },
  ];
</script>

<section id={id} class="schedule-section">
  <h2 class="schedule-title text-[32px]">SCHEDULE</h2>

  <div class="schedule-item">
    <div class="time ">9:00 AM</div>
    <div class="event ">Inauguration</div>
  </div>

  <div class="schedule-item">
    <div class="time ">9:30 AM</div>
    <div class="event ">Meetup</div>
  </div>

  <div class="guest-cards-container">
    {#each guests as guest}
      <div class="guest-card">
        <img src={guest.image} alt={guest.name} class="guest-image" />
        <div class="guest-info">
          <div class="guest-name">{guest.name}</div>
          <div class="guest-designation">{guest.designation}</div>
        </div>
      </div>
    {/each}
  </div>

  <div class="schedule-item">
    <div class="time">10:00 AM</div>
    <div class="event">Breakfast</div>
  </div>

  <div class="schedule-item">
    <div class="time">10:30 AM</div>
    <div class="event">Guest Meetup</div>
  </div>

  <div class="schedule-item">
    <div class="time">12:00 PM</div>
    <div class="event">Lunch</div>
  </div>

  <div class="guest-cards-container">
    {#each guests as guest}
      <div class="guest-card">
        <img src={guest.image} alt={guest.name} class="guest-image" />
        <div class="guest-info">
          <div class="guest-name">{guest.name}</div>
          <div class="guest-designation">{guest.designation}</div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .schedule-section {
    /* background-color: #fce4ec;  */
    background-image: url('/schedule-bg.png');
    background-repeat: no-repeat;
    padding: 40px 20px;
    background-size: cover;
    text-align: center;
    font-family: sans-serif;
  }

  /* Attempt to replicate the striped background */


  .schedule-title {
    font-weight: bold;
    color: #333;
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
  }

  .schedule-item {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px 20px;
    margin: 10px auto;
    max-width: 800px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .time {
    font-size: 1.2em;
    font-weight: bold;
    color: #e91e63; /* Pink color for time */
    width: 120px; /* Fixed width for time */
    text-align: left;
    flex-shrink: 0;
  }

  .event {
    font-size: 1.2em;
    color: #333;
    text-align: left;
    flex-grow: 1;
  }

  .guest-cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px auto;
    max-width: 800px;
    position: relative;
    z-index: 1;
  }

  .guest-card {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: calc(50% - 30px);
    min-width: 300px; 
  }

  .guest-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 15px;
    background-color: #e0f7fa; 
  }

  .guest-info {
    text-align: left;
  }

  .guest-name {
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
  }

  .guest-designation {
    font-size: 0.9em;
    color: #666;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .schedule-title {
      font-size: 2em;
    }
    .schedule-item {
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 15px;
    }
    .time {
      width: auto;
      margin-bottom: 5px;
    }
    .guest-card {
      width: 100%; /* One card per row on smaller screens */
    }
  }
</style>
