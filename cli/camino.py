import click
import os

@click.command()
@click.option("--playbook", help="playbook name")
@click.argument('type')
def camino(type, playbook):
    if type == "init":
        if not playbook: click.echo("the INIT command requires the PLAYBOOK option"); return
        click.echo("{} -- {}".format(type, playbook))

        os.system("cp -r ~/Desktop/INSPER/6o_semestre/ml/camino/playbooks/{} .".format(playbook))
    elif type == "submit":
        if playbook: click.echo("the SUBMIT command does not take the PLAYBOOK option"); return
        click.echo("{}".format(type))
    elif type == "test":
        if playbook: click.echo("the SUBMIT command does not take the PLAYBOOK option"); return

        os.system("python3 .test.py")
    elif type == "compile":
        if not playbook: click.echo("the COMPILE command requires the PLAYBOOK option"); return

        click.echo("{}".format(type))
    else:
        click.echo("the command issued does not exist")

if __name__ == '__main__':
    camino()