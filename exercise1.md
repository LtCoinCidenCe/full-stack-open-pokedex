# C#
Since C# is MicroSoft's programming language, common CI setup for C# code is around MicroSoft products, such as Visual Studio and Visual Studio Code.
## Linting
For linting, in Visual Studio, when editing the code, the integrated formatter works silently. IntelliSense is one of the most ancient assistor in code editing. Apart from VS and VS Code, dotnet-format is a standalone program for linting in the .NET 6 SDK.
## Testing
Creating unit test in Visual Studio is the first thing that comes to my mind about testing. MicroSoft learning page has some tutorials. xUnit is also an option as well.
## Building
Since C# is a compiled language, building the executable is based on the build system that shipped with Visual Studio. Or now, the dotnet could be installed and Visual Studio Code plugin can call the builder.
# Setting up the CI
I know Atlassian provides CI tools but I prefer GitLab. Love the definition "merge request" in GitLab that the action of merging any branch to the main branch. Plus, I heard that many fled to GitLab after GitHub was acquired by MicroSoft.
# Self-hosted or cloud-based
It depends on the purpose. For any company, setting up a self-hosted instance is better and feasible. It just needs a Linux machine with enough memory and decent CPU. Public instance of GitLab is for getting connected with the world (but in this aspect, GitHub is better since many are already stored on Github).
