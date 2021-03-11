function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
  }
  function hustonChange() {
    document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!."
  }
  
  function abortingMission() {
  
    Swal.fire({
      title: 'Are you sure you want to abort the mission?',
      showCancelButton: true,
      cancelButtonColor: `rgba(255, 0, 0, 0.5)`,
      confirmButtonText: `Yes`,
      confirmButtonColor: `rgba(0, 0, 255, 0.5)`,
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("statusReport").innerHTML = "Mission aborted! Space shuttle returning home."
      } 
    })  
  }
  
  window.addEventListener("load", init);