FROM mcr.microsoft.com/dotnet/sdk:6.0 AS api-build
WORKDIR /src
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
COPY ./Tokiota.Workshops.Kubernetes.DemoApp.sln ./
COPY ./src/ ./src
RUN dotnet restore "Tokiota.Workshops.Kubernetes.DemoApp.sln"
RUN dotnet publish "src/Tokiota.Workshops.Kubernetes.DemoApp.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS release
WORKDIR /app
EXPOSE 80
COPY --from=api-build /app/publish .
ENTRYPOINT ["dotnet", "Tokiota.Workshops.Kubernetes.DemoApp.dll"]