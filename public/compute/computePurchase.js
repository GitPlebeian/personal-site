

$('#computationRateUpgrade').click(function() {
  if (purchase(computationRateUpgradePrice)) {
    manualSystemComputeRate += computationRateUpgrade
    computationRateUpgrade += 0.01
    computationRateUpgradePrice += computationRateUpgradePrice  * 0.065
  }
})

$('#purchaseUpgradeModule').click(function() {
  if (purchase(upgradeModulePrice)) {
    upgradeModuleActive = true
  }
})
