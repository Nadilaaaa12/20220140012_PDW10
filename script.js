function kirimData() {
    // Prevent the form from submitting
    event.preventDefault();
  
    // Select the form container and add an animation class
    var formContainer = document.querySelector('.container');
    formContainer.classList.add('animate-submit');
  
    // Collect form data
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name='peminatan']:checked").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var alamat = document.getElementById("alamat").value;
  
    // Display the data in an alert after a short delay to allow the animation to play
    setTimeout(function() {
      alert(
        "Nama: " + nama +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAngkatan: " + angkatan +
        "\nTanggal Lahir: " + tanggal +
        "\nAlamat: " + alamat
      );
  
      // Remove the animation class after the alert
      formContainer.classList.remove('animate-submit');
  
      // Clear the form fields
      document.getElementById("nama").value = "";
      document.getElementById("nim").value = "";
      document.querySelector("input[name='peminatan']:checked").checked = false;
      document.getElementById("angkatan").selectedIndex = 0;
      document.getElementById("tanggal").value = "";
      document.getElementById("alamat").value = "";
    }, 1000);
  }