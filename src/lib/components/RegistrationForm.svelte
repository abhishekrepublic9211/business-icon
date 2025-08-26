<script lang="ts">
  let signUpAs: string = 'Business';
  let name: string = '';
  let age: number | null = null;
  let organisationName: string = '';
  let selectedCategory: string = 'Auto';

  const categories = [
    'Auto',
    'Innovation',
    'Real Estate',
    'Health Care',
    'E-Commerce'
  ];
</script>

<div class="registration-form-container">
  <div class="form-card">
    <h2 class="form-title">Registration Form</h2>

    <div class="form-group">
      <label class="label-text">Sign-Up as :</label>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="signUpAs" value="Business" bind:group={signUpAs} />
          Business
        </label>
        <label class="radio-label">
          <input type="radio" name="signUpAs" value="Individual" bind:group={signUpAs} />
          Individual
        </label>
        <label class="radio-label">
          <input type="radio" name="signUpAs" value="Start-Up" bind:group={signUpAs} />
          Start-Up
        </label>
      </div>
    </div>

    <div class="form-group">
      <label for="name" class="label-text">Name<span class="required">*</span></label>
      <input type="text" id="name" placeholder="Enter your Name" bind:value={name} required />
    </div>

    <div class="form-group">
      <label for="age" class="label-text">Age<span class="required">*</span></label>
      <input type="number" id="age" placeholder="Enter your Age" bind:value={age} required />
    </div>

    <div class="form-group">
      <label for="organisationName" class="label-text">Name of Organisation</label>
      <input type="text" id="organisationName" placeholder="Enter Organisation name" bind:value={organisationName} />
    </div>

    <div class="form-group">
      <label for="categories" class="label-text">Categories</label>
      <div class="select-wrapper">
        <select id="categories" bind:value={selectedCategory}>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
        <span class="select-arrow"></span>
      </div>
    </div>
  </div>
</div>

<style>
  .registration-form-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align to top to match image */
    min-height: 100vh; /* Ensure it takes full height for centering */
    padding: 50px 20px; /* Add some padding around the form */
    background-color: #f0f0f0; /* Light grey background as in image */
    box-sizing: border-box;
  }

  .form-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 600px; /* Adjust max-width to match image proportions */
    box-sizing: border-box;
  }

  .form-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
    text-align: left; /* Align title to left */
  }

  .form-group {
    margin-bottom: 25px;
  }

  .label-text {
    display: block;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .required {
    color: #e74c3c; /* Red color for asterisk */
    margin-left: 4px;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 12px 15px;
    border: none; /* Remove default border */
    border-bottom: 1px solid #ccc; /* Only bottom border */
    font-size: 16px;
    color: #555;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  input[type="text"]:focus,
  input[type="number"]:focus {
    border-color: #007bff; /* Highlight on focus */
    outline: none;
  }

  input::placeholder {
    color: #aaa;
  }

  .radio-group {
    display: flex;
    gap: 25px; /* Space between radio buttons */
    margin-top: 10px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }

  .radio-label input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .radio-label input[type="radio"]:checked {
    border-color: #e74c3c; /* Red border when checked */
  }

  .radio-label input[type="radio"]:checked::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #e74c3c; /* Red inner circle when checked */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .select-wrapper {
    position: relative;
    width: 100%;
  }

  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #555;
    background-color: #fff;
    -webkit-appearance: none; /* Remove default arrow */
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  select:focus {
    border-color: #007bff;
    outline: none;
  }

  .select-arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #555; /* Down arrow */
    pointer-events: none;
  }
</style>
