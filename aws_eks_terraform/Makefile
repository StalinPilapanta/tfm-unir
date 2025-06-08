init:
	terraform -chdir=./ init
	terraform -chdir=./ workspace new dev
	terraform -chdir=./ validate
	terraform -chdir=./ fmt --recursive
plan:
	terraform -chdir=./ init
	terraform -chdir=./ workspace select dev
	terraform -chdir=./ validate
	terraform -chdir=./ fmt --recursive
	terraform -chdir=./ plan -var-file dev.tfvars

apply:
	terraform -chdir=./ init
	terraform -chdir=./ workspace select dev
	terraform -chdir=./ validate
	terraform -chdir=./ fmt --recursive
	terraform -chdir=./ apply -var-file dev.tfvars -auto-approve

destroy:
	terraform -chdir=./ init
	terraform -chdir=./ workspace select dev
	terraform -chdir=./ validate
	terraform -chdir=./ fmt --recursive
	terraform -chdir=./ destroy -var-file dev.tfvars -auto-approve
