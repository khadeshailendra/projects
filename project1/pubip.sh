temp=[azure]
pub=$(az vm show -d -g ansiblegroup -n ansiblevm --query publicIps -o tsv)
echo $temp >> /etc/ansible/hosts
echo $pub >> /etc/ansible/hosts
