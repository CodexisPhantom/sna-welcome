local QBCore = exports['qb-core']:GetCoreObject()

local function SendReactMessage(action, data)
  SendNUIMessage({
    action = action,
    data = data
  })
end

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterNetEvent('sna-welcome:client:open', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  cb({})
end)