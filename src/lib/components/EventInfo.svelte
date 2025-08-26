<script lang="ts">
  // No script logic needed for this static component
</script>

<div class="event-main-section">
<div class="event-info-section w-[80vw] mx-auto">
  
    <span class="event-date text-[22px]">November 7th (Friday)</span>
    <span class="event-location text-[22px]">Kolkata</span>
 
  <div class="contact-info">
    <div class="contact-item">
      <span class="label text-lg">Email</span>
      <span class="value text-lg">ayan.mahata@republicworld.com</span>
    </div>
    <div class="contact-item">
      <span class="label text text-lg">Mobile No</span>
      <span class="value text text-lg">91 98309 93838</span>
    </div>
  </div>
  <a href="/form" class="register-button text-[22px]">Register <span class="arrow">↗</span></a>
</div>
</div>

<style>

   .event-main-section{
    background-color: #C92427;
   }

  .event-info-section { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px; /* Adjust padding to match pixel perfect */
    color: white;
    font-family: sans-serif; /* Assuming a generic sans-serif font */
    font-size: 16px; /* Adjust font size to match pixel perfect */
  }

  .event-details {
    display: flex;
    gap: 40px; /* Space between date and location */
    align-items: center;
  }

  .event-date,
  .event-location {
    font-weight: bold; /* Appears bold in the image */
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 5px; /* Space between email and mobile lines */
  }

  .contact-item {
    display: flex;
    gap: 10px; /* Space between label and value */
  }

  .label {
    font-weight: bold; /* Email and Mobile No labels appear bold */
  }

  .register-button {
    background-color: #FF962C; 
    color:black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px; /* Slightly rounded corners */
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .register-button:hover {
    opacity: 0.9;
  }

  .arrow {
    font-size: 18px; /* Adjust arrow size */
    line-height: 1;
  }
</style>
